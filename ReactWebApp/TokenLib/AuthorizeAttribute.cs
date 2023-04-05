using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TokenLib
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
    public class AuthorizeAttribute : Attribute, IAuthorizationFilter
    {
        public void OnAuthorization(AuthorizationFilterContext context)
        {
            var allowAnonymous = context.ActionDescriptor.EndpointMetadata.OfType<AllowAnonymousAttribute>().Any();
            if (allowAnonymous)
                return;

            if (!context.HttpContext.Request.Headers.ContainsKey("Authorization"))
            {
                SetUnauthorized(context);
                return;
            }

            var authHeader = context.HttpContext.Request.Headers["Authorization"];
            if (!TokenManager.ValidateJSONWebToken(authHeader))
            {
                SetUnauthorized(context);
                return;
            }
        }

        private void SetUnauthorized(AuthorizationFilterContext context)
        {
            context.Result = new JsonResult(new { message = "Unauthorized" }) { StatusCode = StatusCodes.Status401Unauthorized };
        }
    }
}
