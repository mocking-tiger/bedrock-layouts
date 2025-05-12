import { Frame } from "@bedrock-layout/frame";
import { PadBox } from "@bedrock-layout/padbox";
import { Stack } from "@bedrock-layout/stack";

//simulate text of various lengths
function randomLoremIpsum() {
  const string =
    "Est autem etiam actio quaedam corporis, quae motus et status naturae congruentis tenet;";

  return Array.from(
    { length: Math.floor(Math.random() * 6 + 1) },
    () => string
  ).join(" ");
}

export function Card({ title }) {
  return (
    <Stack as="article" gutter="size3">
      <Frame ratio={[16, 9]}>
        <img
          src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJ1aXR8ZW58MHx8MHx8fDA%3D"
          alt="A random fruit from unsplash.com"
        />
      </Frame>
      <PadBox padding="size5">
        <h3>{title}</h3>
        <p>{randomLoremIpsum()}</p>
      </PadBox>
    </Stack>
  );
}
