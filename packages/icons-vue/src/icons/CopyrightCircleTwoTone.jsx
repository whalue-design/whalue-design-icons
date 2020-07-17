// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CopyrightCircleTwoToneSvg from '@whalue-design/icons-svg/lib/asn/CopyrightCircleTwoTone';

export default {
  name: 'IconCopyrightCircleTwoTone',
  displayName: 'CopyrightCircleTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CopyrightCircleTwoToneSvg } },
      children,
    ),
};