import { createMachine, interpret } from 'xstate';

const toggleMachine = createMachine({
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: { on: { TOGGLE: 'active' } },
    active: { on: { TOGGLE: 'inactive' } }
  }
});

const toggleService = interpret(toggleMachine)
  .onTransition((state) => console.log(state.value))
  .start();

export default toggleService