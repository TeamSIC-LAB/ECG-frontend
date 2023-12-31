import React from 'react';
import { styled } from 'styled-components';
import OptionFirst from './OptionFirst';
import palette from '../../libs/styles/palette';
import OptionSecond from './OptionSecond';
import OptionThird from './OptionThird';
import OptionFourth from './OptionFourth';
import OptionFifth from './OptionFifth';
import OptionSixth from './OptionSixth';
import OptionSeventh from './OptionSeventh';

const OptionTemplateBlock = styled.div`
  height: 93vh;
  background: ${palette.gray[3]};
  display: flex;
  padding: 1rem;
  align-items: center;
  box-shadow: 0 0 8px rgba(0,0,0,0.025);
  flex-direction: column;
  overflow:scroll;

  &::-webkit-scrollbar {
    display:none;
  }

  & {
  -ms-overflow-style: none;
  scrollbar-width: none;
  }
`;

const OptionHeader = styled.div`
  background: #3DA5F5;
  font-weight: bold;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 0.7rem;
  .page{
    font-weight: 500;
  }
  .opacity{
    opacity: 0.5;
  }
`

const OptionWrapper = styled.div`
  width:21vw;
  margin-top: 1rem;

  &.marginTopNone{
    margin-top: 0;
  }
`

const OptionTemplate = () => {
  return (
    <OptionTemplateBlock>
      <OptionWrapper className='marginTopNone'>
        <OptionHeader>
          <div>집주인 및 세입자</div>
          <div className='page'>1<span className='opacity'> / 7</span></div>
        </OptionHeader>
        <OptionFirst />
      </OptionWrapper>

      <OptionWrapper>
        <OptionHeader>
          <div>임대차계약의 내용</div>
          <div className='page'>2<span className='opacity'> / 7</span></div>
        </OptionHeader>
        <OptionSecond />
      </OptionWrapper>
      
      <OptionWrapper>
        <OptionHeader>
          <div>보증금 지급</div>
          <div className='page'>3<span className='opacity'> / 7</span></div>
        </OptionHeader>
        <OptionThird />
      </OptionWrapper>
      
      <OptionWrapper>
        <OptionHeader>
          <div>특약사항</div>
          <div className='page'>4<span className='opacity'> / 7</span></div>
        </OptionHeader>
        <OptionFourth />
      </OptionWrapper>
      
      <OptionWrapper>
        <OptionHeader>
          <div>부동산의 표시</div>
          <div className='page'>5<span className='opacity'> / 7</span></div>
        </OptionHeader>
        <OptionFifth />
      </OptionWrapper>

      <OptionWrapper>
        <OptionHeader>
          <div>집주인 상세정보</div>
          <div className='page'>6<span className='opacity'> / 7</span></div>
        </OptionHeader>
        <OptionSixth />
      </OptionWrapper>
       
      <OptionWrapper>
        <OptionHeader>
          <div>세입자 상세정보</div>
          <div className='page'>7<span className='opacity'> / 7</span></div>
        </OptionHeader>
        <OptionSeventh />
      </OptionWrapper>
    </OptionTemplateBlock >
  );
};

export default OptionTemplate;