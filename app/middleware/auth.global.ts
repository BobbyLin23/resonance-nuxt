const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)'])

const isOrgSelectionRoute = createRouteMatcher(['/org-selection(.*)'])

export default defineNuxtRouteMiddleware((to) => {
  const { orgId, userId } = useAuth()

  if (isPublicRoute(to)) {
    return
  }

  if (!userId.value) {
    return navigateTo('/sign-in')
  }

  if (isOrgSelectionRoute(to)) {
    return
  }

  if (userId.value && !orgId.value) {
    return navigateTo('/org-selection')
  }
})
