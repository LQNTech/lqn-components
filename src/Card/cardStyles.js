import styled from 'styled-components';

export const Container = styled.div`
  width: ${({ width, spacing }) =>
    width
      ? spacing
        ? `calc(${width}% - ${spacing}px)`
        : `${width}%`
      : '100%'};
  border-radius: 15px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.04);
  border: solid 1px #f2f2f2;
  background-color: #ffffff;
  padding: 36px 30px;

  :hover {
    cursor: pointer;
  }
`;

export const Icon = styled.img`
  padding-bottom: 27px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.span`
  font-size: 18px;
  line-height: 1.22;
  color: #000000;
`;

export const Button = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: #ff2e63;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
