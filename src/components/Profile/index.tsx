import { useEffect, useState } from 'react'
import { Infos, ProfileContainer, ProfileContent } from './styles'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios'
import MySVGComponent from '../Spinner'

interface Profile {
  avatar_url: string
  name: string
  html_url: string
  bio: string
  company: string
  followers: string
  login: string
}

export function Profile() {
  const [profileData, setProfileData] = useState<Profile>({} as Profile)
  const [isLoadingProfile, setIsLoadingProfile] = useState(false)

  async function fetchProfile() {
    setIsLoadingProfile(true)
    const response = await axios.get('https://api.github.com/users/marcos-vvc')

    setProfileData(response.data)
    setIsLoadingProfile(false)
  }
  useEffect(() => {
    fetchProfile()
  }, [])

  return (
    <ProfileContainer>
      {isLoadingProfile ? (
        <MySVGComponent />
      ) : (
        <>
          <img src={profileData.avatar_url} alt="Eu" />

          <ProfileContent>
            <header>
              <h2>{profileData.name}</h2>

              <Link to={profileData.html_url} target="blank">
                GITHUB
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Link>
            </header>
            <p>{profileData.bio}</p>

            <Infos>
              <span>
                <FontAwesomeIcon icon={faGithub} /> {profileData.login}
              </span>
              <span>
                <FontAwesomeIcon icon={faBuilding} /> {profileData.company}
              </span>
              <span>
                <FontAwesomeIcon icon={faUserGroup} /> {profileData.followers}
                seguidores
              </span>
            </Infos>
          </ProfileContent>
        </>
      )}
    </ProfileContainer>
  )
}
