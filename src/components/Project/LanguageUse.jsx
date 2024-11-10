import React from "react";
import LanguageUseItem from "./LanguageUseItem";

const ToolsArea = () => {
    const tools = [
        {
            src: "/img/tools/html.png",
            title: "HTML 5",
        },
        {
            src: "/img/tools/css.png",
            title: "CSS",
        },
        {
            src: "/img/tools/js.png",
            title: "JavaScript",
        },
        {
            src: "/img/tools/react.png",
            title: "React",
        },
        {
            src: "/img/tools/anguler.png",
            title: "Angular ",
        },
        {
            src: "/img/tools/vue.png",
            title: "Vue",
        },
        {
            src: "/img/tools/node.png",
            title: "Node.js",
        },
        {
            src: "/img/tools/php.png",
            title: "PHP",
        },
        {
            src: "/img/tools/laravel.png",
            title: "Laravel",
        },
        {
            src: "/img/tools/mysql.png",
            title: "Mysql",
        },
        {
            src: "/img/tools/python.png",
            title: "Python",
        },
        {
            src: "/img/tools/java.png",
            title: "Java",
        },
        {
            src: "/img/tools/kotlin.png",
            title: "Kotlin",
        },
        {
            src: "/img/tools/flutter.png",
            title: "Flutter",
        },
        {
            src: "/img/tools/swift.png",
            title: "Swift",
        },
        {
            src: "/img/tools/ruby.png",
            title: "Ruby",
        },
        {
            src: "/img/tools/cplus.png",
            title: "C++",
        },
        {
            src: "/img/tools/csharp.png",
            title: "C# ",
        },
        {
            src: "/img/tools/dotnet.png",
            title: "Microsoft .Net",
        },
        {
            src: "/img/tools/typescript.png",
            title: "TypeScript",
        },
        {
            src: "/img/tools/github.png",
            title: "Github",
        },
        {
            src: "/img/tools/gitlab.png",
            title: "Gitlab",
        },
        {
            src: "/img/tools/docker.png",
            title: "Docker",
        },
        
    ];

    return (
        <section className="tools-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title title-style-two white-title text-center mb-50">
                            <h2 className="title">Language and Tools We Use</h2>
                        </div>
                    </div>
                </div>

                <div className="tools-item-wrap">
                    <div className="row justify-content-center">
                        {tools.map((x, index) => (
                            <div
                                key={index}
                                className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                                <LanguageUseItem item={x} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ToolsArea;
