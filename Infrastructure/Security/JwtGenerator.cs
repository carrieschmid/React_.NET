using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Application.Interfaces;
using Domain;

namespace Infrastructure.Security {
    public class JwtGenerator : IJwtGenerator {
        string CreateToken (AppUser user) {
            var claims = new List<Claim> {
                new Claim (JwtRegisteredClaimNames.NameId, user, UserName)
            };
            var key = new SymmetricSecurityKey (Encoding.UTF8.GetBytes ("super secret key"));
            var creds = new SigningCredentials (key, SecurityAlgorithms.HmacSha512Signature);
            var tokenDescriptor = new SecurityTokenDescriptor {
                Subject = new ClaimsIdentity (claims),
                Expires = DateTime.Now.AddDays (7),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler ();
            var token = tokenHandler.CreateToken (tokenDescriptor);
            return tokenHandler.WriteToken (token);

        }

    }
}