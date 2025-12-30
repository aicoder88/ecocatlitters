'use client';

import styled from 'styled-components';
import Link from 'next/link';

const TableWrapper = styled.div`
  overflow-x: auto;
  margin: ${({ theme }) => theme.spacing['2xl']} 0;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const Table = styled.table`
  width: 100%;
  min-width: 900px;
  border-collapse: collapse;
  background: ${({ theme }) => theme.colors.white};
`;

const Th = styled.th`
  background: ${({ theme }) => theme.colors.forestGreen};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.md};
  text-align: left;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  white-space: nowrap;
  position: sticky;
  top: 0;

  &:first-child {
    position: sticky;
    left: 0;
    z-index: 2;
  }
`;

const Td = styled.td`
  padding: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  vertical-align: middle;

  &:first-child {
    background: ${({ theme }) => theme.colors.offWhite};
    font-weight: 600;
    position: sticky;
    left: 0;
  }
`;

const Tr = styled.tr`
  &:hover {
    background: ${({ theme }) => theme.colors.paleGreen}20;
  }
`;

const LitterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.forestGreen};
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

const Rating = styled.span<{ $level: 'excellent' | 'good' | 'moderate' | 'poor' }>`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  background: ${({ $level }) => {
    switch ($level) {
      case 'excellent': return '#C6F6D5';
      case 'good': return '#FEFCBF';
      case 'moderate': return '#FED7AA';
      case 'poor': return '#FED7D7';
    }
  }};
  color: ${({ $level }) => {
    switch ($level) {
      case 'excellent': return '#22543D';
      case 'good': return '#744210';
      case 'moderate': return '#7B341E';
      case 'poor': return '#742A2A';
    }
  }};
`;

const Check = styled.span`
  color: #38A169;
  font-weight: bold;
`;

const Cross = styled.span`
  color: #E53E3E;
`;

const Partial = styled.span`
  color: #D69E2E;
`;

const litterData = [
  {
    name: 'Bamboo',
    href: '/litter-types/bamboo',
    odorControl: 'good',
    clumping: 'good',
    dust: 'excellent',
    biodegradable: true,
    flushable: 'some',
    price: '$$',
    bestFor: 'Eco-conscious households',
  },
  {
    name: 'Corn',
    href: '/litter-types/corn',
    odorControl: 'good',
    clumping: 'excellent',
    dust: 'excellent',
    biodegradable: true,
    flushable: 'yes',
    price: '$$',
    bestFor: 'Easy transition from clay',
  },
  {
    name: 'Grass',
    href: '/litter-types/grass',
    odorControl: 'excellent',
    clumping: 'excellent',
    dust: 'excellent',
    biodegradable: true,
    flushable: 'yes',
    price: '$$$',
    bestFor: 'Premium eco-conscious',
  },
  {
    name: 'Paper',
    href: '/litter-types/paper',
    odorControl: 'moderate',
    clumping: 'poor',
    dust: 'excellent',
    biodegradable: true,
    flushable: 'no',
    price: '$$',
    bestFor: 'Post-surgery, kittens',
  },
  {
    name: 'Tofu',
    href: '/litter-types/tofu',
    odorControl: 'good',
    clumping: 'good',
    dust: 'excellent',
    biodegradable: true,
    flushable: 'yes',
    price: '$$',
    bestFor: 'Apartments, flushability',
  },
  {
    name: 'Walnut',
    href: '/litter-types/walnut',
    odorControl: 'excellent',
    clumping: 'excellent',
    dust: 'good',
    biodegradable: true,
    flushable: 'no',
    price: '$$$',
    bestFor: 'Multi-cat homes',
  },
  {
    name: 'Wheat',
    href: '/litter-types/wheat',
    odorControl: 'good',
    clumping: 'excellent',
    dust: 'good',
    biodegradable: true,
    flushable: 'yes',
    price: '$$',
    bestFor: 'Science-minded owners',
  },
  {
    name: 'Wood',
    href: '/litter-types/wood',
    odorControl: 'excellent',
    clumping: 'moderate',
    dust: 'good',
    biodegradable: true,
    flushable: 'no',
    price: '$',
    bestFor: 'Budget eco-switchers',
  },
];

export default function LitterComparisonTable() {
  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            <Th>Litter Type</Th>
            <Th>Odor Control</Th>
            <Th>Clumping</Th>
            <Th>Dust Level</Th>
            <Th>Biodegradable</Th>
            <Th>Flushable</Th>
            <Th>Price</Th>
            <Th>Best For</Th>
          </tr>
        </thead>
        <tbody>
          {litterData.map((litter) => (
            <Tr key={litter.name}>
              <Td>
                <LitterLink href={litter.href}>{litter.name}</LitterLink>
              </Td>
              <Td>
                <Rating $level={litter.odorControl as 'excellent' | 'good' | 'moderate' | 'poor'}>
                  {litter.odorControl.charAt(0).toUpperCase() + litter.odorControl.slice(1)}
                </Rating>
              </Td>
              <Td>
                <Rating $level={litter.clumping as 'excellent' | 'good' | 'moderate' | 'poor'}>
                  {litter.clumping.charAt(0).toUpperCase() + litter.clumping.slice(1)}
                </Rating>
              </Td>
              <Td>
                <Rating $level={litter.dust as 'excellent' | 'good' | 'moderate' | 'poor'}>
                  {litter.dust === 'excellent' ? 'Very Low' : litter.dust === 'good' ? 'Low' : 'Medium'}
                </Rating>
              </Td>
              <Td>
                {litter.biodegradable ? <Check>Yes</Check> : <Cross>No</Cross>}
              </Td>
              <Td>
                {litter.flushable === 'yes' ? (
                  <Check>Yes</Check>
                ) : litter.flushable === 'no' ? (
                  <Cross>No</Cross>
                ) : (
                  <Partial>Some brands</Partial>
                )}
              </Td>
              <Td>{litter.price}</Td>
              <Td>{litter.bestFor}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
}
