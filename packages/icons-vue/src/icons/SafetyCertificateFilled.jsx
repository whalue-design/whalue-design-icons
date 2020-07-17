// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import SafetyCertificateFilledSvg from '@whalue-design/icons-svg/lib/asn/SafetyCertificateFilled';

export default {
  name: 'IconSafetyCertificateFilled',
  displayName: 'SafetyCertificateFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SafetyCertificateFilledSvg } },
      children,
    ),
};