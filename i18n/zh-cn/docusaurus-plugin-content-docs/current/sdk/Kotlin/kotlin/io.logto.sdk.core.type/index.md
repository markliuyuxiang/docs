# io.logto.sdk.core.type

## Types

| 名称                                                                | 概要                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [CodeTokenResponse](-code-token-response/index.md)                  | data class [CodeTokenResponse](-code-token-response/index.md)(val accessToken: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val refreshToken: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val idToken: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val scope: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val expiresIn: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html))                                                                                                                                                                                                                                              |
| [IdTokenClaims](-id-token-claims/index.md)                          | data class [IdTokenClaims](-id-token-claims/index.md)(val iss: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val sub: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val aud: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val exp: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html), val iat: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html), val atHash: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?)                                                                                                                                                                                        |
| [OidcConfigResponse](-oidc-config-response/index.md)                | data class [OidcConfigResponse](-oidc-config-response/index.md)(val authorizationEndpoint: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val tokenEndpoint: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val endSessionEndpoint: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val userinfoEndpoint: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val jwksUri: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val issuer: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val revocationEndpoint: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)) |
| [RefreshTokenTokenResponse](-refresh-token-token-response/index.md) | data class [RefreshTokenTokenResponse](-refresh-token-token-response/index.md)(val accessToken: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val refreshToken: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val idToken: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, val scope: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val expiresIn: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html))                                                                                                                                                                                                                            |
| [UserInfoResponse](-user-info-response/index.md)                    | data class [UserInfoResponse](-user-info-response/index.md)(val sub: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |