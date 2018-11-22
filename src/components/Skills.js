import React from 'react';
import shortid from 'shortid';

const skillSets = [
  { items: ['JavaScript', 'Node.js', 'Express'], skillLevel: 96, id: shortid.generate() },
  { items: ['React.js'], skillLevel: 96, id: shortid.generate() },
  { items: ['HTML5', 'CSS3', 'Bootstrap 4'], skillLevel: 90, id: shortid.generate() },
  { items: ['MongoDB', 'MySQL'], skillLevel: 96, id: shortid.generate() },
];


const SkillLine = (props) => {
  const numItems = props.items ? props.items.length : 0;
  const itemsStr =
    numItems < 3 ?
      props.items.join(" \u0026 ") :
      `${props.items.slice(0, props.items.length - 1).join(", ")} \u0026 ${props.items[props.items.length - 1]}`;
  return (

    <div className="item">
      {/* <h3 className="level-title">JavaScript, Node.js, &amp; Express</h3> */}
      <h3 className="level-title">{itemsStr}</h3>
      <div className="level-bar">
        <div className="level-bar-inner" data-level={`${props.skillLevel}%`} />
      </div>
    </div>
  );
};

export default () => (
  <aside className="skills aside section">
    <div className="section-inner">
      <h2 className="heading">Skills</h2>
      <div className="content">
        {/* <p className="intro">Intro about your skills goes here. Keep the list lean and only show your primary skillset. You can always provide a link to your Linkedin or Coderwall profile so people can get more info there.</p> */}

        <div className="skillset">
          {skillSets.map(skillSet => <SkillLine {...skillSet} key={skillSet.id} />)}

          {/* <SkillLine items={['JavaScript', 'Node.js', 'Express']} skillLevel="96" /> */}
          {/* <SkillLine items={['React.js']} skillLevel="96" /> */}
          {/* <SkillLine items={['HTML5', 'CSS3', 'Bootcamp']} skillLevel="90" /> */}
          {/* <SkillLine items={['MongoDB', 'MySQL']} skillLevel="96" /> */}


          {/*
          <div className="item">
            <h3 className="level-title">MongoDB, MySQL
              <span className="level-label" data-toggle="tooltip" data-placement="left" data-animation="true" title="You can use the tooltip to explain more about your skill level..."><i className="fas fa-info-circle" />Strong</span>
            </h3>
            <div className="level-bar">
              <div className="level-bar-inner" data-level="85%" />
            </div>
          </div>
          */}

          {/* <p><a className="more-link" href="#"><i className="fas fa-external-link-alt" />More on Coderwall</a></p> */}
        </div>
      </div>
    </div>
  </aside>

);

