import {
  addAttributeToElem,
  addTextToElem,
  loadElemToContainer,
} from './helpers';

function leftOvers() {
  loadElemToContainer('#content', 'h2', 'main-title');
  addTextToElem('#main-title', 'Terms and Conditions');
  loadElemToContainer('#content', 'h3', 'title-desc');
  addTextToElem(
    '#title-desc',
    'Please read our Terms and Conditions and sign below.'
  );
}

function topSection() {
  // first name
  loadElemToContainer('#content', 'section', 'top-section');
  loadElemToContainer('#top-section', 'div', 'first-name-whole');
  loadElemToContainer('#first-name-whole', 'div', 'first-name-title');
  loadElemToContainer('#first-name-title', 'label', 'first-name-label');
  addAttributeToElem('#first-name-label', 'for', 'first-name-input');
  addTextToElem('#first-name-label', 'First name');
  loadElemToContainer('#first-name-title', 'p', 'first-name-star');
  addTextToElem('#first-name-star', '*');
  loadElemToContainer('#first-name-whole', 'input', 'first-name-input');
  addAttributeToElem('#first-name-input', 'type', 'text');
  addAttributeToElem('#first-name-input', 'name', 'first-name-input');

  // last name
  loadElemToContainer('#top-section', 'div', 'last-name-whole');
  loadElemToContainer('#last-name-whole', 'div', 'last-name-title');
  loadElemToContainer('#last-name-title', 'label', 'last-name-label');
  addAttributeToElem('#last-name-label', 'for', 'last-name-input');
  addTextToElem('#last-name-label', 'Last name');
  loadElemToContainer('#last-name-title', 'p', 'last-name-star');
  addTextToElem('#last-name-star', '*');
  loadElemToContainer('#last-name-whole', 'input', 'last-name-input');
  addAttributeToElem('#last-name-input', 'type', 'text');
  addAttributeToElem('#last-name-input', 'name', 'last-name-input');

  // email
  loadElemToContainer('#top-section', 'div', 'email-whole');
  loadElemToContainer('#email-whole', 'div', 'email-title');
  loadElemToContainer('#email-title', 'label', 'email-label');
  addAttributeToElem('#email-label', 'for', 'email-input');
  addTextToElem('#email-label', 'Email');
  loadElemToContainer('#email-title', 'p', 'email-star');
  addTextToElem('#email-star', '*');
  loadElemToContainer('#email-whole', 'input', 'email-input');
  addAttributeToElem('#email-input', 'type', 'email');
  addAttributeToElem('#email-input', 'name', 'email-input');
}

function middleSection() {
  loadElemToContainer('#content', 'section', 'middle-section');
  loadElemToContainer('#middle-section', 'h4', 'terms-title');
  addTextToElem('#terms-title', 'Terms and Conditions');
  loadElemToContainer('#middle-section', 'textarea', 'middle-terms');
  addAttributeToElem('#middle-terms', 'cols', '30');
  addAttributeToElem('#middle-terms', 'rows', '10');
  addAttributeToElem('#middle-terms', 'name', '');
  addTextToElem(
    '#middle-terms',
    `        Last updated:(add date)
              
        Please read these Terms and Conditions
        ("Terms", "Terms and Conditions") carefully before using the
        http://www.mywebsite.com (change this) website and the My Mobile App
        (change this) mobile application (the "Service") operated by My Company
        (change this) ("us", "we", or "our").

        Your access to and use of the
        Service is conditioned on your acceptance of and compliance with these
        Terms. These Terms apply to all visitors, users and others who access or
        use the Service. By accessing or using the Service you agree to be bound
        by these Terms. If you disagree with any part of the terms then you may

        not access the Service. Purchases If you wish to purchase any product or
        service made available through the Service ("Purchase"), you may be
        asked to supply certain information relevant to your Purchase including,
        without limitation, your … Subscriptions Some parts of the Service are
        billed on a subscription basis ("Subscription(s)"). You will be billed
        in advance on a recurring … Content Our Service allows you to post,
        link, store, share and otherwise make available certain information,
        text, graphics, videos, or other material ("Content"). You are

        responsible for the … Links To Other Web Sites Our Service may contain
        links to third­party web sites or services that are not owned or
        controlled by My Company (change this). My Company (change this) has no
        control over, and assumes no responsibility for, the content, privacy
        policies, or practices of any third party web sites or services. You
        further acknowledge and agree that My Company (change this) shall not be
        responsible or liable, directly or indirectly, for any damage or loss

        caused or alleged to be caused by or in connection with use of or
        reliance on any such content, goods or services available on or through
        any such web sites or services. Changes We reserve the right, at our
        sole discretion, to modify or replace these Terms at any time. If a
        revision is material we will try to provide at least 30 (change this)

        days' notice prior to any new terms taking effect. What constitutes a
        material change will be determined at our sole discretion. Contact Us If
        you have any questions about these Terms, please contact us.`
  );
}

function bottomSection() {
  loadElemToContainer('#content', 'section', 'bottom-section');
  loadElemToContainer('#bottom-section', 'div', 'signature');
  loadElemToContainer('#signature', 'div', 'signature-title');
  loadElemToContainer('#signature-title', 'p', 'signature-label');
  addTextToElem('#signature-label', 'Please add initials here');
  loadElemToContainer('#signature-title', 'p', 'signature-star');
  addTextToElem('#signature-star', '*');

  // add 'Please add initials here'

  loadElemToContainer('#bottom-section', 'input', 'clear-pad');
  addAttributeToElem('#clear-pad', 'type', 'button');
  addAttributeToElem('#clear-pad', 'value', 'clear signature pad');
  loadElemToContainer('#bottom-section', 'input', 'submit-signature');
  addAttributeToElem('#submit-signature', 'type', 'button');
  addAttributeToElem('#submit-signature', 'value', 'Submit');
}

function display() {
  leftOvers();
  topSection();
  middleSection();
  bottomSection();

  console.log('display');
}

export { display };
