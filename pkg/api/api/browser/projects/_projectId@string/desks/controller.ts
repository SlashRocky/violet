import { getDesks } from '@violet/api/src/service/browser'
import type { ProjectId } from '@violet/lib/types/branded'
import { defineController } from './$relay'

export default defineController(() => ({
  get: async ({ params }) => {
    const desks = await getDesks(params.projectId as ProjectId)
    return { status: 200, body: desks }
  },
}))