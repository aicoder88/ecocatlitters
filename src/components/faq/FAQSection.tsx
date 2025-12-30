'use client';

import styled from 'styled-components';
import { useState } from 'react';

const FAQWrapper = styled.section`
  margin: ${({ theme }) => theme.spacing['2xl']} 0;
  background: ${({ theme }) => theme.colors.offWhite};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
`;

const FAQTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.forestGreen};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

const FAQList = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

const Question = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.lg};
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.charcoal};
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.paleGreen}20;
  }

  &::after {
    content: '${({ $isOpen }) => ($isOpen ? '−' : '+')}';
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.forestGreen};
    flex-shrink: 0;
  }
`;

const Answer = styled.div<{ $isOpen: boolean }>`
  max-height: ${({ $isOpen }) => ($isOpen ? '500px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease;
`;

const AnswerContent = styled.div`
  padding: 0 ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.7;

  a {
    color: ${({ theme }) => theme.colors.forestGreen};
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  }
`;

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  faqs: FAQ[];
}

export default function FAQSection({ title = 'Frequently Asked Questions', faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQWrapper>
      <FAQTitle>{title}</FAQTitle>
      <FAQList>
        {faqs.map((faq, index) => (
          <FAQItem key={index}>
            <Question
              onClick={() => toggleFAQ(index)}
              $isOpen={openIndex === index}
              aria-expanded={openIndex === index}
            >
              {faq.question}
            </Question>
            <Answer $isOpen={openIndex === index}>
              <AnswerContent dangerouslySetInnerHTML={{ __html: faq.answer }} />
            </Answer>
          </FAQItem>
        ))}
      </FAQList>
    </FAQWrapper>
  );
}
