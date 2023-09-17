import { Backdrop, Fade, Modal } from "@material-ui/core";
import React from "react";

interface QuoteGeneratorProps {
  open: boolean;
  close: () => void;
  processingQuote: boolean;
  setProcessingQuote: React.Dispatch<React.SetStateAction<boolean>>;
  quoteReceived: String | null;
  setQuoteReceived: React.Dispatch<React.SetStateAction<String | null>>;
}

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const QuoteGeneratorModal = ({
  open,
  close,
  processingQuote,
  setProcessingQuote,
  quoteReceived,
  setQuoteReceived,
}: QuoteGeneratorProps) => {
  return (
    <Modal
      id="QuoteGeneratorModal"
      aria-labelledby="spring-modal-quotegenmodal"
      aria-describedby="spring-modal-openandclose-quotegenerator"
      open={open}
      onClose={close}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <QuoteGeneratorModalContainer sx={style}>
          <QuoteGeneratorInnerContainer></QuoteGeneratorInnerContainer>
        </QuoteGeneratorModalContainer>
      </Fade>
    </Modal>
  );
};

export default QuoteGeneratorModal;
