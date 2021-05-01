const { json } = require("body-parser");
const httpStatus = require("http-status");
const SAML_DE = require("saml-encoder-decoder-js");
const xmlParser = require("xml2json");

const xmlData = `<samlp:Response 
ID="_6418ce7f-0f99-49c5-b6e2-0ac2768affa6" 
Version="2.0" 
IssueInstant="2021-02-09T10:43:17.803Z" 
Destination="https://api-v2.happay.in/access/v2/sso/?
domain=welspun" 
Consent="urn:oasis:names:tc:SAML:2.0:consent:unspecified" 
xmlns:samlp="urn:oasis:names:tc:SAML:2.0:protocol">
<Issuer 
    xmlns="urn:oasis:names:tc:SAML:2.0:assertion">http://adfs.welspun.com/adfs/services/trust
</Issuer>
<samlp:Status>
    <samlp:StatusCode 
        Value="urn:oasis:names:tc:SAML:2.0:status:Success" />
</samlp:Status>
<Assertion 
    ID="_41af62fa-865d-4698-84cb-2a16120c9ff9" 
    IssueInstant="2021-02-09T10:43:17.803Z" 
    Version="2.0" 
    xmlns="urn:oasis:names:tc:SAML:2.0:assertion">
    <Issuer>http://adfs.welspun.com/adfs/services/trust</Issuer>
    <ds:Signature 
        xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
        <ds:SignedInfo>
            <ds:CanonicalizationMethod 
                Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#" />
            <ds:SignatureMethod 
                Algorithm="http://www.w3.org/2001/04/xmldsig-more#rsa-sha256" />
            <ds:Reference 
                URI="#_41af62fa-865d-4698-84cb-2a16120c9ff9">
                <ds:Transforms>
                    <ds:Transform 
                        Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature" />
                    <ds:Transform 
                        Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#" />
                </ds:Transforms>
                <ds:DigestMethod 
                    Algorithm="http://www.w3.org/2001/04/xmlenc#sha256" />
                <ds:DigestValue>L+uR22aXbtE8NSP6EKA43tX75Obk/
                    HGBRs7bekb1xB4=
                </ds:DigestValue>
            </ds:Reference>
        </ds:SignedInfo>
        <ds:SignatureValue>JTTTJZHNyNSugAtav6OvE0GEwq0q//M96zh4xziFfF7Fn91bVmvvUf31HeoLojbdgn8oMnXz6aZaubIh0/D+ZCXjjJV9M/CAjmBXls6wl3RaxrWuD8dnihGhwP+QDn+VkIewJ9TLwTV6TcSMsoSGiBGIoJ50NAiWlb3vY/LDjq/R6PpWr8veOhoIPddj/SObZOzWNR81YlRRLLkM4asW/5tZzFNB/X5qZQKroxXRVBisUE5H52B93aJ5xMQCon15hYNs/5hZtpx46IhhbOmfz424xaR/VV1YYmDve2n+pkRkuXT+TQq2QTXXFQXEeMUNqIdaOb0hUCKPr/
            JcM4J7SA==
        </ds:SignatureValue>
        <KeyInfo 
            xmlns="http://www.w3.org/2000/09/xmldsig#">
            <ds:X509Data>
                <ds:X509Certificate>MIIC3DCCAcSgAwIBAgIQfsjQlwI/7IpHzv2X3rxtxDANBgkqhkiG9w0BAQsFADAqMSgwJgYDVQQDEx9BREZTIFNpZ25pbmcgLSBhZGZzLndlbHNwdW4uY29tMB4XDTIxMDIwNDA5MDMxM1oXDTIyMDIwNDA5MDMxM1owKjEoMCYGA1UEAxMfQURGUyBTaWduaW5nIC0gYWRmcy53ZWxzcHVuLmNvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAKbvf+k5LCn8RWFZj/g08pZfUsA/LMPcTHBGOJxJxss4inRGLVeuYlyatUQeT3ThRI90uizfosJ7CriKci8XJr7Au+SRteZfTbf2J5/lyYHyoOt1b5AKX2xKWGDruB1dhgfnmkJFFUn2TkQ1OEk7xxR26764XdO50+G4gU2q3rTk/2W86QxYc5V91X9X0R211A7nAW/5pf2wgJpEqOy2yaYZDOmWUCelkV7ax4Hxyepagr9yr+41XF3PZRXKNctwcj8v+IahnVYWfbjXgNRjx0TDDspIP61Oc4rs7oU6lJjYLZdxvSzyiaqpS0vMGjzggDfbM6cNdXqB0drHP5eJkaUCAwEAATANBgkqhkiG9w0BAQsFAAOCAQEAGfGBfVwqPEQ0gHUWMobuXP3aEG9ZCy9I2nhWo+SIeXHhhRDeI4Ej48jnjbJ4Gligq9Xvtmiw0Si7RcGtn+DsnRIhcqf377ZvMsFI4AE1HudJT11FRMcW9Tz/ylqY6ReZSoS1lvvXgyGzaNqJ1nAx7i1rrxEs4YgRj8fZ/IXVLmVGOv14QabOysY9mTMmkH+p1BPC/YW8Aa69/KUaoH+HNOR4ojqL5S8k0yNP4wgI/7i49HErdrsv/VZwYl11j1bsEsxel9RjEfEgHo0oIRAriYy4uYrIdYiASnyHRnliLP+8zPPUrFOb9Y8fbwKkp7eL23hE4H+
                    pq4frR8XvXGSmyQ==
                </ds:X509Certificate>
            </ds:X509Data>
        </KeyInfo>
    </ds:Signature>
    <Subject>
        <NameID>rudraksh_bhonsle@welspun.com</NameID>
        <SubjectConfirmation 
            Method="urn:oasis:names:tc:SAML:2.0:cm:bearer">
            <SubjectConfirmationData 
                NotOnOrAfter="2021-02-09T10:48:17.803Z" 
                Recipient="https://api-v2.happay.in/access/v2/sso/?
                domain=welspun" />
        </SubjectConfirmation>
    </Subject>
    <Conditions 
        NotBefore="2021-02-09T10:43:17.803Z" 
        NotOnOrAfter="2021-02-09T11:43:17.803Z">
        <AudienceRestriction>
            <Audience>https://api-v2.happay.in/metadata/</Audience>
        </AudienceRestriction>
    </Conditions>
    <AttributeStatement>
        <Attribute 
            Name="User.email">
            <AttributeValue>rudraksh_bhonsle@welspun.com</AttributeValue>
        </Attribute>
    </AttributeStatement>
    <AuthnStatement 
        AuthnInstant="2021-02-09T10:29:51.303Z" 
        SessionIndex="_41af62fa-865d-4698-84cb-2a16120c9ff9">
        <AuthnContext>
            <AuthnContextClassRef>urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport</AuthnContextClassRef>
        </AuthnContext>
    </AuthnStatement>
</Assertion>
</samlp:Response>`.replace(/\n/g, "");
class LoginController {
  async login(req, res) {
    
    //TBD DECODE BASE64 TO XML
    /*SAML_DE.decodeSamlPost(base64, function(xmlData) {

    });*/

    const jsonObject = xmlParser.toJson(xmlData, {
      object: true,
      sanitize: true,
      trim: true,
    });

    const response = jsonObject["samlp:Response"];
    const status = response["samlp:Status"]["samlp:StatusCode"].Value;
    let email = "";

    if (
      response["Assertion"] &&
      response["Assertion"]["AttributeStatement"] &&
      response["Assertion"]["AttributeStatement"]["Attribute"] &&
      response["Assertion"]["AttributeStatement"]["Attribute"]["Name"] &&
      response["Assertion"]["AttributeStatement"]["Attribute"]["Name"] == "User.email"
    ) {
      email = response["Assertion"]["AttributeStatement"]["Attribute"]["AttributeValue"];
    }

    if (status === "urn:oasis:names:tc:SAML:2.0:status:Success" && email) {
      req.session.user = email;
      res.redirect("/dashboard");
    } else {
      //res.redirect("/401");
      res.status(httpStatus.UNAUTHORIZED).send();
    }

  }
}

module.exports = LoginController;
