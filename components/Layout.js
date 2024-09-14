export default props => {
  
  return () => (
    <div>
      <nav>
        <ul><li>Home</li><li>AboutMe</li></ul>
      </nav>
      <main>
        {props.content}
      </main>
    </div>
  )
}