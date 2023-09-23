

export const Content = ( {title, children} ) => {
  return (
    <div className="content-block">
      <div className="title-container">
        <h2>
          {title}
        </h2>
      </div>
      <div className="paragraph-container">
        {children}
      </div>
    </div>
  )
}
