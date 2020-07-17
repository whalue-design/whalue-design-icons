// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FileMarkdownOutlinedSvg from '@whalue-design/icons-svg/lib/asn/FileMarkdownOutlined';

export default {
  name: 'IconFileMarkdownOutlined',
  displayName: 'FileMarkdownOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FileMarkdownOutlinedSvg } },
      children,
    ),
};