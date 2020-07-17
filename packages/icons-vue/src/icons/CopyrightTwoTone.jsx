// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CopyrightTwoToneSvg from '@whalue-design/icons-svg/lib/asn/CopyrightTwoTone';

export default {
  name: 'IconCopyrightTwoTone',
  displayName: 'CopyrightTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CopyrightTwoToneSvg } },
      children,
    ),
};