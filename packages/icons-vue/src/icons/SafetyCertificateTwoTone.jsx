// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import SafetyCertificateTwoToneSvg from '@whalue-design/icons-svg/lib/asn/SafetyCertificateTwoTone';

export default {
  name: 'IconSafetyCertificateTwoTone',
  displayName: 'SafetyCertificateTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SafetyCertificateTwoToneSvg } },
      children,
    ),
};