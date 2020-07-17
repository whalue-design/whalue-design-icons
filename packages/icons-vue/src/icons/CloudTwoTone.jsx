// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CloudTwoToneSvg from '@whalue-design/icons-svg/lib/asn/CloudTwoTone';

export default {
  name: 'IconCloudTwoTone',
  displayName: 'CloudTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CloudTwoToneSvg } },
      children,
    ),
};