const {on, component} = $.cc

/**
 * The presenter of the todo app.
 */
void
@component('todo-app-presenter')
class {
  /**
   * Gets the current filter.
   */
  getFilter() {
    return this.elem.cc.get('todo-app').filter
  }

  /**
   * Gets the current todo collection of the app.
   * @return {TodoCollection}
   */
  getTodos() {
    return this.elem.cc.get('todo-app').todoCollection
  }
  /**
   * Updates the controls.
   * @private
   */
  @on('todo-app-update.controls')
  updateControls () {
    this.updateFilterBtns()

    this.updateTodoCount()

    this.updateVisibility()

    this.updateToggleBtnState()
  }

  /**
   * Updates the todo list.
   * @private
   */
  @on('todo-app-update.todo-list')
  updateTodoList () {
    this.elem.find('.todo-list').cc.get('todo-list').update(this.getDisplayCollection())
  }

  /**
   * Updates the filter buttons.
   * @private
   */
  updateFilterBtns () {
    this.elem.find('.todo-filters').cc.get('todo-filters').setFilter(this.getFilter().name)
  }

  /**
   * Updates the todo counter.
   * @private
   */
  updateTodoCount () {
    this.elem.find('.todo-count').cc.get('todo-count').setCount(this.getTodos().uncompleted().toArray().length)
  }

  /**
   * Updates the visiblity of components.
   * @private
   */
  updateVisibility () {
    if (this.getTodos().isEmpty()) {
      this.elem.find('#main, #footer').css('display', 'none')
    } else {
      this.elem.find('#main, #footer').css('display', 'block')
    }
  }

  /**
   * Updates the toggle-all button state.
   * @private
   */
  updateToggleBtnState () {
    this.elem.find('.todo-toggle-all').cc.get('todo-toggle-all').updateBtnState(!this.getTodos().uncompleted().isEmpty())
  }

  /**
   * Gets the todo collection which is displayable in the current filter.
   * @private
   */
  getDisplayCollection () {
    return this.getTodos().filterBy(this.filter)
  }
}