import React, { useCallback, useState } from "react";
import { PageLayout } from "../common/layouts/PageLayout";
import Tree from "react-d3-tree";

const orgChart = {
  name: "Club",

  children: [
    {
      name: "Faculty Coordinator",
      children: [
        {
          name: "John Doe",
          children: [],
        },
      ],
    },
    {
      name: "Club Heads",
      children: [
        {
          name: "Automation",
          attributes: {
            department: "Production",
          },
          children: [],
        },
        {
          name: "AI/ML",
          attributes: {
            department: "Production",
          },
          children: [],
        },
        {
          name: "Robotics",
          attributes: {
            department: "Production",
          },
          children: [],
        },
        {
          name: "Web Development",
          attributes: {
            department: "Production",
          },
          children: [],
        },
        {
          name: "Marketing",
          attributes: {
            department: "Production",
          },
          children: [],
        },
        {
          name: "Social Media and Content creation",
          attributes: {
            department: "Production",
          },
          children: [],
        },
      ],
    },
  ],
};

const renderForeignObjectNode = ({
  nodeDatum,
  toggleNode,
  foreignObjectProps,
}) => (
  <g onClick={toggleNode}>
    <circle r={15}></circle>
    <foreignObject {...foreignObjectProps}>
      <div className="">
        <h3 className="mt-10">{nodeDatum.name}</h3>
      </div>
    </foreignObject>
  </g>
);

const DivisionsPage = () => {
  const useCenteredTree = () => {
    const [translate, setTranslate] = useState({ x: 0, y: 0 });
    const containerRef = useCallback((containerElem) => {
      if (containerElem !== null) {
        const { width, height } = containerElem.getBoundingClientRect();
        setTranslate({ x: width / 2, y: height / 2 });
      }
    }, []);
    return [translate, containerRef];
  };

  const [translate, containerRef] = useCenteredTree();
  const nodeSize = { x: 1000, y: 1000 };
  const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: 0 };

  return (
    <PageLayout className="flex p-0">
      <div
        id="treeWrapper"
        ref={containerRef}
        className="flex-1 text-2xl bg-black/10 backdrop-blur-sm"
      >
        <Tree
          translate={translate}
          data={orgChart}
          renderCustomNodeElement={(rd3tProps) =>
            renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
          }
          depthFactor={600}
          pathFunc="step"
        />
      </div>
    </PageLayout>
  );
};

export default DivisionsPage;
