// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CheckCircleTwoToneSvg from '@whalue-design/icons-svg/lib/asn/CheckCircleTwoTone';

export default {
  name: 'IconCheckCircleTwoTone',
  displayName: 'CheckCircleTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CheckCircleTwoToneSvg } },
      children,
    ),
};