import { createMachine, interpret, assign } from 'xstate';

const fetchMachine = createMachine({
  id: 'SWAPI',
  initial: 'idle',
  context: {
    user: null
  },
  states: {
    idle: {
      on: {
        FETCH: 'loading'
      }
    },
    loading: {
      invoke: {
        id: 'fetchLuke',
        src: (context, event) =>
          fetch('https://swapi.dev/api/people/1/').then((res) => res.data),
        onDone: {
          target: 'resolved',
          actions: assign({
            user: (_, event) => event.data
          })
        },
        onError: 'rejected'
      },
      on: {
        CANCEL: 'idle'
      }
    },
    resolved: {
      type: 'final'
    },
    rejected: {
      on: {
        FETCH: 'loading'
      }
    }
  }
});

const fetchService = interpret(fetchMachine)
  .onTransition((state) => console.log(state.value))
  .start();

export default fetchService