import {configureStore, createSlice} from '@reduxjs/toolkit'

const todoSlice = createSlice({
  //apesar de podemos ter o estado global podemos ter pequenos pedaços de estado, que são chamadas de slices ou fatias, ex de um e-comerce, podemos ter um slice para o carrinho outro para os favoritos e etc..
  //os slice ou fatias são mini pedaços de estado
  //os slices precisa ter um nome, um estado inicial e os reducers.
  name: 'todo', 
  initialState: ['Estudar 1 hora por dia', 'Correr 10 km', 'Ler 10 livros por ano'],
  reducers: {
    //aqui dentro vamos adicionar quais ações o usuários podem disparar/fazer/ actions.
    add: (state, action) => {
      state.push(action.payload.inputValue)
    },
  },
})
export const store = configureStore({
  //dentro do reducer do store colocamos as fatias/slices
  reducer: {
    todo: todoSlice.reducer,
  }
  //reducers são as infos que vamos compartilhar entre todos os componentes da nossa aplicação.
})


//Para fazer o todo list acessar as infos do nosso estado precisamos primeiro permitir q todos os componentes da nossa aplicação possam acessar os dados do store

//o redux por baixo dos panos usa a context api do react
// Na context api quando quermos que a aplicação acesse os dados do meu contexto eu tenho que passar um provider por volta. por isso precisamos instalar o react redux para usar com react ou react native.

export const {add} = todoSlice.actions

//