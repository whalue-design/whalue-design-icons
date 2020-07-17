// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CopyrightOutlinedSvg from '@whalue-design/icons-svg/lib/asn/CopyrightOutlined';

export default {
  name: 'IconCopyrightOutlined',
  displayName: 'CopyrightOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CopyrightOutlinedSvg } },
      children,
    ),
};