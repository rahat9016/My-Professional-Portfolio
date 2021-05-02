import React from 'react';
import './blog.css'
import JavaScript from '../../images/javascript2.png'
import react from '../../images/react2.png'
import node from '../../images/node.png'
import express from '../../images/express2.png'
import html from '../../images/html2.png'
import css from '../../images/css2.png'
import bootstrap from '../../images/bootstrap2.png'
import typescript from '../../images/typescript2.png'
const Blog = () => {
    return (
        <section className="blog-container" id="blog">
            <h1 className="top-header">Article</h1>
            <div className="blog-wrapper">
                <div className="box">
                    <div className="content">
                        <img className="blog-icon" src={JavaScript} alt=""/>
                        <p>JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.</p>
                        <a href="" className="readArticleBtn">Read Article</a>
                    </div>
                </div>
                <div className="box">
                    <div className="content">
                        <img className="blog-icon" src={react} alt=""/>
                        <p>React is an open-source, front end, JavaScript library for building user interfaces or UI components</p>
                        <a href="" className="readArticleBtn">Read Article</a>
                    </div>
                </div>
                <div className="box">
                    <div className="content">
                        <img className="blog-icon" src={node} alt=""/>
                        <p>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. </p>
                        <a href="" className="readArticleBtn">Read Article</a>
                    </div>
                </div>
                <div className="box">
                    <div className="content">
                        <img className="blog-icon" src={typescript} alt=""/>
                        <p>TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript</p>
                        <a href="" className="readArticleBtn">Read Article</a>
                    </div>
                </div>
                <div className="box">
                    <div className="content">
                    <img className="blog-icon" src={html} alt=""/>
                        <p>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser.</p>
                        <a href="" className="readArticleBtn">Read Article</a>
                    </div>
                </div>
                <div className="box">
                    <div className="content">
                    <img className="blog-icon" src={css} alt=""/>
                        <p>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. </p>
                        <a href="" className="readArticleBtn">Read Article</a>
                    </div>
                </div>
                <div className="box">
                    <div className="content">
                    <img className="blog-icon" src={express} alt=""/>
                        <p>Express.js, or simply Express, is a back end web application framework for Node.js, </p>
                        <a href="" className="readArticleBtn">Read Article</a>
                    </div>
                </div>
                <div className="box">
                    <div className="content">
                        <img className="blog-icon" src={bootstrap} alt=""/>
                        <p>It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.</p>
                        <a href="" className="readArticleBtn">Read Article</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;