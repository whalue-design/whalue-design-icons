// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import SisternodeOutlinedSvg from '@whalue-design/icons-svg/lib/asn/SisternodeOutlined';

export default {
  name: 'IconSisternodeOutlined',
  displayName: 'SisternodeOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SisternodeOutlinedSvg } },
      children,
    ),
};