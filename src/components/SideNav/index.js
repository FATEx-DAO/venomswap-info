import React from 'react'
import styled from 'styled-components'
import { AutoColumn } from '../Column'
import Title from '../Title'
import { BasicLink } from '../Link'
import { useMedia } from 'react-use'
import { TYPE } from '../../Theme'
import { withRouter } from 'react-router-dom'
import { TrendingUp, List, PieChart, Disc } from 'react-feather'
import Link from '../Link'
import { useSessionStart } from '../../contexts/Application'
import { useDarkModeManager } from '../../contexts/LocalStorage'
import Toggle from '../Toggle'
import theme from '../../Theme'
import TwitterLogo from '../../assets/twitter-logo.svg'
import RedditLogo from '../../assets/reddit-logo.svg'
import MediumLogo from '../../assets/medium-logo.svg'
import TelegramLogo from '../../assets/telegram-logo.svg'
import DiscordLogo from '../../assets/discord-logo.svg'
import YouTubeLogo from '../../assets/youtube-logo.svg'
import LinkedinLogo from '../../assets/linkedin-logo.svg'

const Wrapper = styled.div`
  height: ${({ isMobile }) => (isMobile ? 'initial' : '100vh')};
  background-color: ${({ theme }) => theme.bg1};
  color: ${({ theme }) => theme.text1};
  padding: 0.5rem 0.5rem 0.5rem 0.75rem;
  position: sticky;
  top: 0;
  z-index: 9999999;
  box-sizing: border-box;
  /* background-color: #1b1c22; */

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    position: relative;
  }

  @media screen and (max-width: 600px) {
    padding: 1rem;
  }
`

const Option = styled.div`
  font-weight: 500;
  font-size: 14px;
  opacity: ${({ activeText }) => (activeText ? 1 : 0.6)};
  color: ${({ theme }) => theme.text1};
  display: flex;
  :hover {
    opacity: 1;
  }
`

const DesktopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`

const MobileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderText = styled.div`
  margin-right: 0.75rem;
  font-size: 0.825rem;
  font-weight: 500;
  display: inline-box;
  display: -webkit-inline-box;
  a {
    color: ${({ theme }) => theme.text1};

    opacity: 0.8;
    :hover {
      opacity: 1;
    }
  }
`

const Polling = styled.div`
  position: fixed;
  display: flex;
  left: 0;
  bottom: 0;
  padding: 1rem;
  color: white;
  opacity: 0.4;
  transition: opacity 0.25s ease;
  :hover {
    opacity: 1;
  }
`
const PollingDot = styled.div`
  width: 8px;
  height: 8px;
  min-height: 8px;
  min-width: 8px;
  margin-right: 0.5rem;
  margin-top: 3px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.green1};
`

const SocialLinks = styled.div`
  margin-top: 10px;
  max-width: 75%;

  a {
    display: inline-block;
    margin: 5px;

    img,
    svg {
      filter: invert(${(props) => (props.isDark ? '1' : '0')});
      width: 20px;
      opacity: 0.6;

      :hover {
        opacity: 1;
      }
    }
  }
`

function SideNav({ history }) {
  const below1080 = useMedia('(max-width: 1080px)')

  const below1180 = useMedia('(max-width: 1180px)')

  const seconds = useSessionStart()

  const [isDark, toggleDarkMode] = useDarkModeManager()

  return (
    <Wrapper isMobile={below1080}>
      {!below1080 ? (
        <DesktopWrapper>
          <AutoColumn gap="1rem" style={{ marginLeft: '.75rem', marginTop: '1.5rem' }}>
            <Title />
            {!below1080 && (
              <AutoColumn gap="1.25rem" style={{ marginTop: '1rem' }}>
                <BasicLink to="/home">
                  <Option activeText={history.location.pathname === '/home' ?? undefined}>
                    <TrendingUp size={20} style={{ marginRight: '.75rem' }} />
                    Overview
                  </Option>
                </BasicLink>
                <BasicLink to="/tokens">
                  <Option
                    activeText={
                      (history.location.pathname.split('/')[1] === 'tokens' ||
                        history.location.pathname.split('/')[1] === 'token') ??
                      undefined
                    }
                  >
                    <Disc size={20} style={{ marginRight: '.75rem' }} />
                    Tokens
                  </Option>
                </BasicLink>
                <BasicLink to="/pairs">
                  <Option
                    activeText={
                      (history.location.pathname.split('/')[1] === 'pairs' ||
                        history.location.pathname.split('/')[1] === 'pair') ??
                      undefined
                    }
                  >
                    <PieChart size={20} style={{ marginRight: '.75rem' }} />
                    Pairs
                  </Option>
                </BasicLink>

                <BasicLink to="/accounts">
                  <Option
                    activeText={
                      (history.location.pathname.split('/')[1] === 'accounts' ||
                        history.location.pathname.split('/')[1] === 'account') ??
                      undefined
                    }
                  >
                    <List size={20} style={{ marginRight: '.75rem' }} />
                    Accounts
                  </Option>
                </BasicLink>
              </AutoColumn>
            )}
          </AutoColumn>
          <AutoColumn gap="0.5rem" style={{ marginLeft: '.75rem', marginBottom: '4rem' }}>
            <HeaderText>
              <Link href="https://github.com/FATEx-DAO" target="_blank">
                Code
                {/*<Code size={14} />*/}
              </Link>
            </HeaderText>
            <HeaderText>
              <Link href="https://app.fatexfi.io" target="_blank">
                DApp
              </Link>
            </HeaderText>
            <HeaderText>
              <Link href="https://linktr.ee/fatexdao" target="_blank">
                DAO Links
              </Link>
            </HeaderText>
            <HeaderText>
              <Link href="https://fatexdao.gitbook.io/fatexdao/" target="_blank">
                Green Paper
                {/*<Book size={14} />*/}
              </Link>
            </HeaderText>
            <SocialLinks isDark={isDark}>
              <Link href={'https://www.twitter.com/FATExDAO'} external={true}>
                <img src={TwitterLogo} alt={'Twitter logo'} />
              </Link>
              <Link href={'https://www.reddit.com/r/FATEx'} external={true}>
                <img src={RedditLogo} alt={'Reddit logo'} />
              </Link>
              <Link href={'https://fatexdao.medium.com'} external={true}>
                <img src={MediumLogo} alt={'Medium logo'} />
              </Link>
              <Link href={'https://t.me/FATExDAO'} external={true}>
                <img src={TelegramLogo} alt={'Telegram logo'} />
              </Link>
              <Link href={'https://discord.gg/uA6xrmsRfu'} external={true}>
                <img src={DiscordLogo} alt={'Discord logo'} />
              </Link>
              <Link href={'https://youtube.com/channel/UCvD3ItDf063xc_I4412wXCg'} external={true}>
                <img src={YouTubeLogo} alt={'YouTube logo'} />
              </Link>
              <Link href={'https://www.linkedin.com/company/fatexdao'} external={true}>
                <img src={LinkedinLogo} alt={'LinkedIn logo'} />
              </Link>
            </SocialLinks>
            <Toggle isActive={isDark} toggle={toggleDarkMode} />
          </AutoColumn>
          {!below1180 && (
            <Polling style={{ marginLeft: '.5rem' }}>
              <PollingDot />
              <a href="/" style={{ color: theme.text1 }}>
                <TYPE.small color={theme.text1}>
                  Updated {!!seconds ? seconds + 's' : '-'} ago <br />
                </TYPE.small>
              </a>
            </Polling>
          )}
        </DesktopWrapper>
      ) : (
        <MobileWrapper>
          <Title />
        </MobileWrapper>
      )}
    </Wrapper>
  )
}

export default withRouter(SideNav)
