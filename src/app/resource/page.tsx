import ResourceFilter from '@/components/resource/ResourceFilter'
import ResourcesPage from '@/components/resource/Resources'
import React from 'react'

export default function resource() {
  return (
    <div>
      <ResourcesPage />
      <ResourceFilter />
    </div>
  )
}
