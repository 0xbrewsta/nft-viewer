import type { FunctionComponent } from "react";
import { Box, Stack } from "@chakra-ui/react";
import { Wrapper } from "./Wrapper";
import { PageTitle } from "./PageTitle";
import { PageLead } from "./PageLead";

interface PageHeadingProps {
  title: string;
  lead?: string;
}

const PageHeading: FunctionComponent<PageHeadingProps> = ({ title, lead }) => (
  <Box py="50px" borderBottom="1px" borderColor="gray.300">
    <Wrapper>
      <Stack spacing={6}>
        <PageTitle>{title}</PageTitle>
        {lead && <PageLead>{lead}</PageLead>}
      </Stack>
    </Wrapper>
  </Box>
);

export { PageHeading };
