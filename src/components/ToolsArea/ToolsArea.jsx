import React from "react";
import ToolsAreaItem from "./ToolsAreaItem";

const ToolsArea = () => {
  const tools = [
    {
      src: "/img/tools/Android.png",
      title: "Android Studio",
      desc: ``,
    },
    {
      src: "/img/tools/atom.png",
      title: "Atom",
      desc: ``,
    },
    {
      src: "/img/tools/netbeans.png",
      title: "Netbeans",
      desc: ``,
    },
    {
      src: "/img/tools/phpstorm.png",
      title: "PhpStorm",
      desc: ``,
    },
    {
      src: "/img/tools/pycharm.png",
      title: "Pycharm ",
      desc: ``,
    },
    {
      src: "/img/tools/github.png",
      title: "Github",
      desc: ``,
    },
    {
      src: "/img/tools/gitLab.png",
      title: "GitLab",
      desc: ``,
    },
    {
      src: "/img/tools/vs.png",
      title: "Vitual Studio",
      desc: ``,
    },
    {
      src: "/img/tools/docker.png",
      title: "Docker",
      desc: ``,
    },
    {
      src: "/img/tools/figma.png",
      title: "Figma",
      desc: ``,
    },
    {
      src: "/img/tools/photoshop.png",
      title: "Adobe Photoshop",
      desc: ``,
    },
    {
      src: "/img/tools/sketch.png",
      title: "Sketch",
      desc: ``,
    },
    {
      src: "/img/tools/blender.png",
      title: "Blender",
      desc: ``,
    },
    {
      src: "/img/tools/vscode.png",
      title: "Vitual Studio Code",
      desc: ``,
    },
    {
      src: "/img/tools/sublime.png",
      title: "Sublime Text",
      desc: ``,
    },
    {
      src: "/img/tools/illustrator.png",
      title: "Adobe Illustrator",
      desc: ``,
    },
  ];

  return (
    <section className="tools-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title title-style-two white-title text-center mb-50">
              <h2 className="title">What Tools We Use</h2>
            </div>
          </div>
        </div>

        <div className="tools-item-wrap">
          <div className="row justify-content-center">
            {tools.map((x, index) => (
              <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <ToolsAreaItem item={x} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsArea;
