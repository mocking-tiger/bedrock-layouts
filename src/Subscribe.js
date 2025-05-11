import { Stack } from "@bedrock-layout/stack";

export function Subscribe() {
  return (
    <Stack>
      <Stack>
        <h2>Subscribe To Our Newsletter</h2>
        <p>
          Subscribe to our newsletter to keep up to date on all our amazing
          products.
        </p>
      </Stack>

      <Stack>
        <label>
          Name
          <input type="text" />
        </label>

        <label>
          Email
          <input type="email" />
        </label>

        <button>Subscribe</button>
      </Stack>
    </Stack>
  );
}
