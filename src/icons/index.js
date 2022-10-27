export const ArrowSvg = ({ fill, rotate }) => {
  return <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 1L5 5L1 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>

}

export const UserIcon = () => {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_358_454)">
      <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#3F3F46" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21" stroke="#3F3F46" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
}

export const SearchIcon = <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g>
    <path d="M12.0007 18C15.8671 18 19.0015 14.866 19.0015 11C19.0015 7.13401 15.8671 4 12.0007 4C8.13434 4 5 7.13401 5 11C5 14.866 8.13434 18 12.0007 18Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M17 17L20.0003 20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </g>
</svg>
  ;

const ICON_SET = {
  UserIcon,
  ArrowSvg,
  SearchIcon
}

export default ICON_SET;