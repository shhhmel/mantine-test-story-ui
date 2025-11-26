import { AccordionProps, Accordion as MantineAccordion } from '@mantine/core';

const AccordionComponent = (props: AccordionProps) => {
  return <MantineAccordion {...props} />;
};

export const Accordion = Object.assign(AccordionComponent, {
  Item: MantineAccordion.Item,
  Control: MantineAccordion.Control,
  Panel: MantineAccordion.Panel,
});
