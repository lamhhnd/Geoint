import React from 'react'
import { Link } from 'react-router-dom'
import { Color } from "cesium";
import { Viewer, Entity } from "resium";

export default function HomePage() {
    return (
        <Viewer
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }}
/>
    )
}
