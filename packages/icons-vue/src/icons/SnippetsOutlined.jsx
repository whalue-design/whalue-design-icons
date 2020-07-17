// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import SnippetsOutlinedSvg from '@whalue-design/icons-svg/lib/asn/SnippetsOutlined';

export default {
  name: 'IconSnippetsOutlined',
  displayName: 'SnippetsOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SnippetsOutlinedSvg } },
      children,
    ),
};