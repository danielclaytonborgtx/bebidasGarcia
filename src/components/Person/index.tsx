interface PersonProps {
  name: string;
  age: number;
  profession: string;
}

export function Person({ name, age, profession }: PersonProps) {
  return (
    <div
      style={{
        marginBottom: "2rem",
      }}
    >
      <p>Nome: {name}</p>
      <p>Idade: {age} </p>
      <p>Profissão {profession}</p>
    </div>
  );
}
