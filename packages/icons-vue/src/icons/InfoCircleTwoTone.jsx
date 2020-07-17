// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import InfoCircleTwoToneSvg from '@whalue-design/icons-svg/lib/asn/InfoCircleTwoTone';

export default {
  name: 'IconInfoCircleTwoTone',
  displayName: 'InfoCircleTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: InfoCircleTwoToneSvg } },
      children,
    ),
};