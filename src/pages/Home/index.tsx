import { Play } from "phosphor-react";
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from "./styles";
// import { useState } from "react";

// Controlled vs Uncontrolled
export default function Home() {
  // Controlled
  // const [task, setTask] = useState("");

  // uncontrolled
  function handleSubmit(event) {
    event.target.task.value = "";
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>

          {/* Uncontrolled */}
          <TaskInput
            id="task"
            // uncontrolled
            name="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"

            // Controlled
            /* onChange={(e) => setTask(e.target.value)}
            value={task} */
          />

          <datalist id="task-suggestions">
            <option value="">Projeto 1</option>
            <option value="">Projeto 2</option>
            <option value="">Projeto 3</option>
            <option value="">Banana</option>
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            id="minutesAmount"
            type="number"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled={!task} type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
