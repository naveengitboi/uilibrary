import styled from "styled-components";

const CodeWrapper = styled.div`
  border: 1px solid var(--darkGrayTone);
  --commonPadding: 0.5rem 1rem;
`;

const CodeBlockHeader = styled.div`
  background: var(--codeBg);
  padding: 0.5rem;
  border-radius: 5px 5px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: var(--small);
  color: var(--white);
  border-bottom: 1px solid var(--darkGrayTone);
`;

const CopyCodeButton = styled.button`
  background: var(--mainBg);
  color: var(--white);
  padding: var(--commonPadding);
  border: 1px solid var(--codeBg);
  border-radius: 0;
  cursor: pointer;
  font-size: var(--small);
  font-weight: 500;
  transition: all 0.3s ease;
  border-radius: 5px 0 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: var(--codeBg);
    border: 1px solid var(--darkGrayTone);
  }
`;

const CodeBlockTab = styled.span`
  padding: var(--commonPadding);
`;
const Code = styled.pre`
  white-space: pre-wrap;
  word-wrap: break-word;
  padding: 1rem;
  background-color: var(--codeBg);
  display: block;
  overflow-x: auto;
  font-family: var(--codeFont);
  font-size: var(--small);
  font-weight: 600;
  color: var(--white);
  max-height: 500px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--grayTone);
    border-radius: 5px;
  }
`;

export { CodeWrapper, CodeBlockHeader, CopyCodeButton, CodeBlockTab, Code };
