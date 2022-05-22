import DC from '@theme/DocCard';
import { useDocById } from '@docusaurus/theme-common'
import React from 'react'
import { DocMetadataBase } from '@docusaurus/plugin-content-docs'

export default function DocCard({docId}:{docId:string}) {
  const doc = useDocById(docId ?? undefined);
  const u = docId.endsWith("/readme") ? docId.substring(0, docId.length - "/readme".length) : docId;
  return <p><DC item={{
    type: "link",
    label: doc.title,
    docId: docId,
    href: "/docs/"+u
  }} /></p>
}