using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using AngularAspNet.Web.Models;

namespace AngularAspNet.Web.Controllers.API
{
    [RoutePrefix("Api/Users")]
    public class UsersApiController : ApiController
    {
        public static IList<User> Users
        {
            get
            {
                return new List<User>
                {
                    new User {Id = 1, FirstName = "John", LastName = "Doe", UserName = "johndoe"},
                    new User {Id = 2, FirstName = "Eric", LastName = "Newton", UserName = "ericnewton"},
                    new User {Id = 3, FirstName = "Janet", LastName = "Doe", UserName = "janetdoe"},
                };
            }
        }

        [HttpGet]
        [Route("{id:int}")]
        public IHttpActionResult GetUser(int id)
        {
            return Json(Users.FirstOrDefault(x => x.Id == id));
        }

        [Route("")]
        public IHttpActionResult GetUsers()
        {
            return Json(Users);
        }
    }
}