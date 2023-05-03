import styled from 'styled-components';

export const PrivacyContext = () => {
  return (
    <>
      <TextTitle>Privacy Policy</TextTitle>
      <p>Effective date: 2023-01-18</p>
      <p>Updated on: 2023-01-18</p>
      <p>
        This Privacy Policy explains the policies of King Finance on the collection and use of the information we
        collect when you access kingworld.finance (the “Service”). This Privacy Policy describes your privacy rights and
        how you are protected under privacy laws.
      </p>
      <p>
        By using our Service, you are consenting to the collection and use of your information in accordance with this
        Privacy Policy. Please do not access or use our Service if you do not consent to the collection and use of your
        information as outlined in this Privacy Policy.
      </p>
      <p>King Finance is authorized to modify this Privacy Policy at any time. This may occur without prior notice.</p>
      <p>King Finance will post the revised Privacy Policy on the kingworld.finance website</p>
      <br />
      <br />
      <br />
      <br />
      <TextBold>Collection and Use of Your Personal Information</TextBold>
      <br />
      <br />
      <br />
      <TextBold>Information We Collect</TextBold>
      <br />
      <p>
        When using our Service, you will be prompted to provide us with personal information used to contact or identify
        you. kingworld.finance collects the following information:
      </p>
      <ul>
        <li>Usage Data</li>
        <li>Name</li>
        <li>Email</li>
        <li>Payment Information</li>
      </ul>
      <p>Usage Data includes the following:</p>
      <ul>
        <li>Internet Protocol (IP) address of computers accessing the site</li>
        <li>Web page requests</li>
        <li>Referring web pages</li>
        <li>Browser used to access site</li>
        <li>Time and date of access</li>
      </ul>
      <br />
      <TextBold>How We Collect Information</TextBold>
      <br />
      <p>kingworld.finance collects and receives information from you in the following manner:</p>
      <ul>
        <li>When you fill a registration form or otherwise submit your personal information.</li>
        <li>When you interact with our Service.</li>
      </ul>
      <p>
        Your information will be stored for up to 30 days after it is no longer required to provide you the services.
        Your information may be retained for longer periods for reporting or record- keeping in accordance with
        applicable laws. Information which does not identify you personally may be stored indefinitely
      </p>
      <br />
      <br />
      <TextBold>How We Use Your Information</TextBold>
      <br />
      <p>kingworld.finance may use your information for the following purposes:</p>
      <ul>
        <li>Providing and maintaining our Service, as well as monitoring the usage of our Service.</li>
        <li>
          For other purposes. King Finance will use your information for data analysis to identify usage trends or
          determine the effective of our marketing campaigns when reasonable. We will use your information to evaluate
          and improve our Service, products, services, and marketing efforts.
        </li>
      </ul>
      <TextBold>How We Share Your Information</TextBold>
      <br />
      <p>kingworld.finance may use your information for the following purposes:</p>
      <ul>
        <li>Providing and maintaining our Service, as well as monitoring the usage of our Service.</li>
        <li>
          For other purposes. King Finance will use your information for data analysis to identify usage trends or
          determine the effective of our marketing campaigns when reasonable. We will use your information to evaluate
          and improve our Service, products, services, and marketing efforts.
        </li>
      </ul>
      <TextBold>Third-party Sharing</TextBold>
      <br />
      <p>Your information may be disclosed for additional reasons, including:</p>
      <ul>
        <li>Complying with applicable laws, regulations, or court orders.</li>
        <li> Responding to claims that your use of our Service violates third-party rights.</li>
        <li> Enforcing agreements you make with us, including this Privacy Policy.</li>
      </ul>
      <br />
      <TextBold>Cookies</TextBold>
      <br />
      <p>
        Cookies are small text files that are placed on your computer by websites that you visit. Websites use cookies
        to help users navigate efficiently and perform certain functions. Cookies that are required for the website to
        operate properly are allowed to be set without your permission. All other cookies need to be approved before
        they can be set in the browser.
      </p>
      <ul>
        <li>
          Strictly necessary cookies. Strictly necessary cookies allow core website functionality such as user login and
          account management. The website cannot be used properly without strictly necessary cookies.
        </li>
      </ul>
      <br />
      <TextBold>Security</TextBold>
      <br />
      <p>
        Your information’s security is important to us. kingworld.finance utilizes a range of security measures to
        prevent the misuse, loss, or alteration of the information you have given us. However, because we cannot
        guarantee the security of the information you provide us, you must access our service at your own risk. King
        Finance is not responsible for the performance of websites operated by third parties or your interactions with
        them. When you leave this website, we recommend you review the privacy practices of other websites you interact
        with and determine the adequacy of those practices.
      </p>
      <br />
      <br />
      <TextBold>Contact Us</TextBold>
      <br />
      <p>
        For any questions, please contact us through the following methods: <br />
        Name: King Finance <br />
        Address: Silicon Oasis <br />
        Email: info@kingworld.finance <br />
        Website: kingworld.finance <br />
        For any queries or concerns you have related to the processing of your information, you may contact our Privacy
        Officer at Benson FTZA, info@kingworld.finance.
      </p>
    </>
  );
};

export const TextTitle = styled.p`
  font-family: 'gotham-bold';
  padding: 50px 0;
  font-size: 21px;
  line-height: 25px;
`;

export const TextBold = styled.div`
  font-family: 'gotham-bold';
  font-size: 17px;
  line-height: 17px;
`;
