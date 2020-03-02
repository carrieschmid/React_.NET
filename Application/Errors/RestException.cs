using System;
using System.Net;

namespace Application.Errors {
    public class RestException : Exception {
        public RestException (HttpStatusCode code, object errors = null) {

        }
    }
}