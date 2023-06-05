import { useState } from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";


export function AccordionPage() {
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen(null);
        } else {
            setOpen(id);
        }
    }

    return (
        <div className="content">
            <h1>Accordion page</h1>
            <Accordion open={open} toggle={toggle}>
                <AccordionItem>
                    <AccordionHeader targetId="1">Accordion item 1</AccordionHeader> 
                    <AccordionBody accordionId="1">
                        <p>Accordion item 1 content</p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="2">Accordion item 2</AccordionHeader>
                    <AccordionBody accordionId="2">
                        <p>Accordion item 2 content</p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="3">Accordion item 3</AccordionHeader>
                    <AccordionBody accordionId="3">
                        <p>Accordion item 3 content</p>
                    </AccordionBody>
                    
                </AccordionItem>

            </Accordion>
        </div>
    )
}