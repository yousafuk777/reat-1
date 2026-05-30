import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    {
      img: '../image/img1.png',
      intro: '',
      color:'royalblue',
      tag: 'Satisfied'
    },
    {
      img: '../image/img2.png',
      color:'lightseagreen',
      intro: '',
      tag: 'Underserved'
    },
    {
      img: '../image/img3.png',   
      color:'orange',
      intro: '',
      tag: 'Underbanked'
    },
  ]
  return (
    <div>
      <Section1 users={users} />
    </div>
  )
}

export default App