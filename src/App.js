import { Stack } from "@bedrock-layout/stack";
import { Inline } from "@bedrock-layout/inline";
import { Cover } from "@bedrock-layout/cover";
import { Center } from "@bedrock-layout/center";

import { Subscribe } from "./Subscribe";
import { Menu } from "./Menu";
import { Card } from "./Card";

function App() {
  return (
    <Stack gutter="size3">
      <Cover minHeight="50vh" gutter="size3" top={<Menu />}>
        <Center maxWidth="40rem">
          <Stack as="header" gutter="size3">
            <h1>Coco Le Belle</h1>
            <p>
              A collection of handmade, one-of-a-kind jewelry and accessories.
            </p>
            <Inline gutter="size3">
              <button>new Arrivals</button>
            </Inline>
          </Stack>
        </Center>
      </Cover>
      <Stack gutter="size7">
        <h2>New Arrivals</h2>
        <Card />
      </Stack>
      <Center centerText>
        <Subscribe />
      </Center>
    </Stack>
  );
}

export default App;
